import { useState } from 'react';
import { authClient } from '../lib/auth-client';

export default function AuthButtons() {
    const { data: session, isPending } = authClient.useSession();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('signin');
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    if (isPending) return null;

    if (session) {
        return (
            <div className="flex items-center gap-3">
                <span className="text-sm">Hi, {session.user.name}</span>
                <button onClick={() => authClient.signOut()} className="rounded border px-3 py-1 text-sm">
                    Sign out
                </button>
            </div>
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const result =
            mode === 'signup'
                ? await authClient.signUp.email(form)
                : await authClient.signIn.email({ email: form.email, password: form.password });
        if (result.error) setError(result.error.message || 'Something went wrong');
        else setOpen(false);
    }

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="rounded border px-3 py-1 text-sm">
                Sign in
            </button>
            {open && (
                <form onSubmit={handleSubmit} className="absolute right-0 mt-2 w-64 space-y-2 rounded border bg-white p-4 text-black shadow">
                    {mode === 'signup' && (
                        <input required placeholder="Name" value={form.name} onChange={update('name')} className="w-full rounded border p-2" />
                    )}
                    <input required type="email" placeholder="Email" value={form.email} onChange={update('email')} className="w-full rounded border p-2" />
                    <input required type="password" minLength={8} placeholder="Password (8+ chars)" value={form.password} onChange={update('password')} className="w-full rounded border p-2" />
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" className="w-full rounded bg-black p-2 text-white">
                        {mode === 'signup' ? 'Create account' : 'Sign in'}
                    </button>
                    <button type="button" onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')} className="w-full text-sm underline">
                        {mode === 'signup' ? 'Have an account? Sign in' : 'New here? Sign up'}
                    </button>
                </form>
            )}
        </div>
    );
}