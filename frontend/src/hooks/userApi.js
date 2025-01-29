import { useState, useEffect } from 'react';

const useUser = (token) => {
    const [user, setUser] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true); // เริ่มต้นการโหลดข้อมูล
            try {
                // ดึงข้อมูลโปรไฟล์
                const profileResponse = await fetch('http://127.0.0.1:8000/profile/get', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!profileResponse.ok) {
                    const errorData = await profileResponse.json();
                    throw new Error(errorData.detail || 'Failed to fetch user profile');
                }

                const profileData = await profileResponse.json();
                setUser(profileData);

                // ดึงข้อมูลรูปภาพผู้ใช้
                const imageResponse = await fetch('http://127.0.0.1:8000/profile/get/image', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!imageResponse.ok) {
                    throw new Error('Failed to fetch user image');
                }

                const imageBlob = await imageResponse.blob();
                const imageUrl = URL.createObjectURL(imageBlob);
                setUserImage(imageUrl);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // เสร็จสิ้นการโหลดข้อมูล
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [token]);

    return { user, userImage, loading, error };
};

export default useUser;
