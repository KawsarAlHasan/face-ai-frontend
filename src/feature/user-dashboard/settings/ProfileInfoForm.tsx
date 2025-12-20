"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Avatar } from "antd";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";
import "./style.css";
import { useMyProfile } from "@/api-services/userServices";
import { BASE_URL, fetcherWithTokenPatch } from "@/api-services/api";
import { toast } from "sonner";
import Spinner from "@/shared/Spinner";

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
        full_name: profileData?.user?.full_name || "",
        email: profileData?.user?.email || "",
        phone_number: profileData?.user?.phone_number || "",
      });

      if (profileData?.user?.profile_picture) {
        setImageUrl(profileData?.user?.profile_picture);
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

      toast.success("Profil mis à jour avec succès!");

      mutate();
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Impossible de mettre à jour le profil"
      );
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Erreur lors du chargement des données de profil</div>;
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
            Changer de photo
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
          label="Nom et prénom"
          name="full_name"
          className="form-item"
          rules={[{ required: true, message: "Veuillez saisir votre nom complet" }]}
        >
          <Input placeholder="Alex Johnson" className="custom-input" />
        </Form.Item>

        <Form.Item label="E-mail" name="email" className="form-item">
          <Input
            placeholder="Alex.34@yahoo.com"
            className="custom-input text-white!"
            disabled
          />
        </Form.Item>

        <Form.Item
          label="Numéro de téléphone"
          name="phone_number"
          className="form-item"
        >
          <Input
            placeholder="Saisissez votre numéro de téléphone"
            className="custom-input"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="save-button2"
          loading={uploading}
        >
          {uploading ? "Économie..." : "Enregistrer les modifications"}
        </Button>
      </Form>
    </div>
  );
};

export default ProfileInfoForm;
