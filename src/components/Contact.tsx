import { useState } from 'react';
import { Mail, User, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {translations} from "../types.ts";
import {useLanguage} from "../hooks/useLanguage.tsx";

export function Contact() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        message: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name === '',
            email: formData.email === '' || !/\S+@\S+\.\S+/.test(formData.email),
            phoneNumber: formData.phoneNumber === '' || !/^\+?[0-9]{1,4}?[-. ]?(\([0-9]{1,5}\))?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/.test(formData.phoneNumber),
            message: formData.message === ''
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs
                .send(
                    'service_69ebmzq', // Remplace par ton service ID
                    'template_7jr4o78', // Remplace par ton template ID
                    formData,
                    '6GAGvMv2XvGjbUN7k' // Remplace par ta public key
                )
                .then(
                    (response) => {
                        console.log('Email envoyé !', response.status, response.text);
                        alert('Message envoyé avec succès 🚀');
                        setFormData({
                            name: '',
                            email: '',
                            phoneNumber: '',
                            message: ''
                        });
                    },
                    (error) => {
                        console.error('Erreur envoi EmailJS :', error);
                        alert('Erreur lors de l’envoi du message. Réessaie plus tard.');
                    }
                );
        } else {
            console.log('Formulaire invalide');
        }
    };

    return (
        <section id="contact" className="py-24 px-4 inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        {t.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {t.subtitle}
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">{t.form.nom.title}</label>
                            <div className={`flex items-center gap-2 border rounded-xl px-4 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.form.nom.placeHolder}
                                    className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">{t.form.email.title}</label>
                            <div className={`flex items-center gap-2 border rounded-xl px-4 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                <Mail className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.form.email.placeHolder}
                                    className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">{t.form.phone.title}</label>
                            <div className={`flex items-center gap-2 border rounded-xl px-4 py-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                <Phone className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder={t.form.phone.placeHolder}
                                    className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">{t.form.msg.title}</label>
                            <div className={`flex gap-2 border rounded-xl px-4 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                <MessageSquare className="w-5 h-5 mt-2 text-gray-500 dark:text-gray-300" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t.form.msg.placeHolder}
                                    className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400 resize-none h-28"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl hover:opacity-90 transition bg-blue-600 hover:bg-blue-800 text-white font-medium gap-2 transition-colors"
                        >
                            {t.btn}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
