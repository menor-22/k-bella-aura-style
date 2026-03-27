import { lovable } from '@/integrations/lovable/index';
import { toast } from 'sonner';

const Auth = () => {
  const handleGoogleLogin = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result?.error) toast.error('Erro ao conectar com Google.');
  };

  return (
    <div className="min-h-screen bg-gradient-noir flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            K <span className="text-gradient-gold">BELLA</span> AURA
          </h1>
          <p className="font-body text-sm text-secondary/60 tracking-wider">
            Moda feminina elegante e sofisticada
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gold/20 py-4 font-body text-sm text-primary-foreground hover:bg-noir-light/50 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Entrar com Google
        </button>

        <p className="text-center font-body text-xs text-secondary/40">
          Ao continuar, você concorda com nossos termos de uso.
        </p>
      </div>
    </div>
  );
};

export default Auth;
