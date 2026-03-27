import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('type=recovery')) {
      setIsRecovery(true);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsRecovery(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success('Senha atualizada com sucesso!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Erro ao atualizar senha.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors';

  return (
    <div className="min-h-screen bg-gradient-noir flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            K <span className="text-gradient-gold">BELLA</span> AURA
          </h1>
          <p className="font-body text-sm text-secondary/60 tracking-wider">
            {isRecovery ? 'Defina sua nova senha' : 'Link inválido ou expirado'}
          </p>
        </div>

        {isRecovery ? (
          <form onSubmit={handleReset} className="space-y-5">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Nova senha (mínimo 6 caracteres)"
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
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-gold text-accent-foreground py-4 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Aguarde...' : 'Atualizar Senha'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-secondary/60 font-body text-sm mb-4">
              Este link de recuperação é inválido ou já expirou.
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="text-gold-light font-body text-sm hover:text-gold transition-colors"
            >
              Voltar para o login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
