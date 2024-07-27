"use client";

import React from 'react';
import {Sidebar} from "flowbite-react";
import {FiHome, FiInbox, FiUser} from "react-icons/fi";

const SidebarComponent = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example" className={'font-inter'}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={FiHome}>
                        Desktop
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={FiInbox}>
                        Documents
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={FiUser}>
                        Pictures
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={FiUser}>
                        Upgrade to Pro
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default SidebarComponent;
