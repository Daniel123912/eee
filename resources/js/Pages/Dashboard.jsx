import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function UserProfile({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Account</h2>}
        >
            <Head title="My Account" />

            <div className="py-4">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Welcome, {auth.user.name}!</h2>
                            <div className="border-top border-gray-200 py-4">
                                <h3 className="card-subtitle mb-2 text-muted">Account Information</h3>
                                <p className="card-text mb-2"><span className="font-weight-bold">Name:</span> {auth.user.name}</p>
                                <p className="card-text mb-2"><span className="font-weight-bold">Email:</span> {auth.user.email}</p>
                                {/* Дополнительная информация о пользователе, если необходимо */}
                            </div>
                            <div className="border-top border-gray-200 py-4">
                                <h3 className="card-subtitle mb-2 text-muted">Settings</h3>
                                <p className="card-text mb-2">You can manage your settings here.</p>
                                {/* Кнопки для управления настройками или ссылки на соответствующие страницы */}
                            </div>
                            {/* Дополнительные секции или блоки информации по желанию */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}