import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Mode = 'login' | 'signup' | 'forgot';

const Auth = () => {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success('Login realizado com sucesso!');
        navigate('/');
      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success('Cadastro realizado! Você já pode entrar.');
        setMode('login');
      } else if (mode === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast.success('Enviamos um link de recuperação para seu e-mail.');
        setMode('login');
      }
    } catch (error: any) {
      toast.error(error?.message || 'Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors';

  const subtitle =
    mode === 'login'
      ? 'Acesse sua conta para continuar'
      : mode === 'signup'
        ? 'Crie sua conta gratuitamente'
        : 'Recupere o acesso à sua conta';

  return (
    <div className="min-h-screen bg-gradient-noir flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            K <span className="text-gradient-gold">BELLA</span> AURA
          </h1>
          <p className="font-body text-sm text-secondary/60 tracking-wider">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />

          {mode !== 'forgot' && (
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={mode === 'signup' ? 'Crie uma senha (mín. 6 caracteres)' : 'Sua senha'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/50 hover:text-gold-light transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {mode === 'login' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setMode('forgot')}
                className="text-gold-light font-body text-xs hover:text-gold transition-colors uppercase tracking-wider"
              >
                Esqueceu a senha?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-gold text-accent-foreground py-4 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading
              ? 'Aguarde...'
              : mode === 'login'
                ? 'Entrar'
                : mode === 'signup'
                  ? 'Cadastrar'
                  : 'Enviar link de recuperação'}
          </button>
        </form>

        <div className="text-center space-y-2">
          {mode === 'login' && (
            <p className="font-body text-sm text-secondary/60">
              Não tem conta?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-gold-light hover:text-gold transition-colors"
              >
                Cadastre-se
              </button>
            </p>
          )}
          {mode === 'signup' && (
            <p className="font-body text-sm text-secondary/60">
              Já tem conta?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-gold-light hover:text-gold transition-colors"
              >
                Entrar
              </button>
            </p>
          )}
          {mode === 'forgot' && (
            <p className="font-body text-sm text-secondary/60">
              <button
                onClick={() => setMode('login')}
                className="text-gold-light hover:text-gold transition-colors"
              >
                Voltar para o login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
