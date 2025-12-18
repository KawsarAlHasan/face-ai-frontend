"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Avatar } from "antd";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";
import "./style.css";
import { useMyProfile } from "@/api-services/userServices";
import { BASE_URL, fetcherWithTokenPatch } from "@/api-services/api";
import { toast } from "sonner";

const ProfileInfoForm = () => {
  const { profileData, isLoading, isError, mutate } = useMyProfile();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // console.log(profileData, "profileData");

  useEffect(() => {
    if (profileData) {
      form.setFieldsValue({
        full_name: profileData.full_name || "",
        email: profileData.email || "",
        phone_number: profileData.phone_number || "",
      });

      if (profileData.profile_picture) {
        setImageUrl(profileData.profile_picture);
      }
    }
  }, [profileData, form]);

  const handleImageChange = (info: any) => {
    const file = info.file.originFileObj || info.file;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      setImageFile(file);
    }
  };

  const onFinish = async (values: any) => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("full_name", values.full_name);
      formData.append("phone_number", values.phone_number);

      if (imageFile) {
        formData.append("profile_picture", imageFile);
      }

      const res = await fetcherWithTokenPatch(
        "/api/auth/profile/update/",
        formData
      );

      console.log(res, "res");

      toast.success("Profile updated successfully!");

      mutate();
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error?.response?.data?.message || "Failed to update profile");
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading profile data</div>;
  }

  return (
    <div className="profile-form-container">
      <div className="profile-image-section">
        <Avatar
          size={120}
          icon={<UserOutlined />}
          src={BASE_URL + imageUrl}
          className="profile-avatar"
        />
        <Upload
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleImageChange}
          accept="image/*"
        >
          <Button
            icon={<CameraOutlined />}
            className="change-photo-button"
            type="dashed"
          >
            Change Photo
          </Button>
        </Upload>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="profile-form"
      >
        <Form.Item
          label="Full Name"
          name="full_name"
          className="form-item"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input placeholder="Alex Johnson" className="custom-input" />
        </Form.Item>

        <Form.Item label="Email" name="email" className="form-item">
          <Input
            placeholder="Alex.34@yahoo.com"
            className="custom-input text-white!"
            disabled
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          className="form-item"
        >
          <Input
            placeholder="Enter your phone number"
            className="custom-input"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="save-button"
          loading={uploading}
        >
          {uploading ? "Saving..." : "Save Changes"}
        </Button>
      </Form>
    </div>
  );
};

export default ProfileInfoForm;
