import React from 'react';
import { Switch } from 'antd';
import './style.css';
import ProfileInfoForm from './ProfileInfoForm';
import SecurityForm from './SecurityForm';

const Settings = () => {

    return (
        <div className="min-h-screen">
            <div className="md:max-w-[65%] mx-auto md:p-6 p-3 flex flex-col gap-6">

                {/* Profile */}
                <div className="bg-black/50 border border-[#8E51FF80] rounded-xl p-6">
                    <h2 className="text-white md:text-[24px] text-xl font-medium mb-5">Profile Information</h2>
                    <ProfileInfoForm />
                </div>

                {/* Privacy */}
                <div className="bg-black/50 border border-[#8E51FF80] rounded-xl p-6">
                    <h2 className="text-white md:text-[24px] text-xl font-medium mb-5">Privacy & Data</h2>

                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">Save analysis history</div>
                            <div className="text-white/50 text-[12px]">Store your past analyses for progress tracking</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">Share Anonymous dta</div>
                            <div className="text-white/50 text-[12px]">Help improve or AI models</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>

                    <div className="flex justify-between items-center py-4">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">Marketing emails</div>
                            <div className="text-white/50 text-[12px]">Receive Tips  and Update</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>
                </div>

                {/* Security */}
                <div className="bg-black/50 border border-[#8E51FF80] rounded-xl p-6">
                    <h2 className="text-white md:text-[24px] text-xl font-medium mb-5">Security</h2>
                    <SecurityForm />
                </div>

                {/* Notification */}
                <div className="bg-black/50 border border-[#8E51FF80] rounded-xl p-6">
                    <h2 className="text-white md:text-[24px] text-xl font-medium mb-5">Notification</h2>

                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">Push Notification</div>
                            <div className="text-white/50 text-[12px]">Get notified about your analysis results</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">Email Notifications</div>
                            <div className="text-white/50 text-[12px]">Receive weekly progress reports</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>

                    <div className="flex justify-between items-center py-4">
                        <div>
                            <div className="text-white text-[16px] font-medium mb-1">SMS Notifications</div>
                            <div className="text-white/50 text-[12px]">Get text alerts for important updates.</div>
                        </div>
                        <Switch defaultChecked className="custom-switch" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Settings;