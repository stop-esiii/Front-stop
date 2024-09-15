import React, {useState} from 'react';
import './ForgotPasswordModal.css';

const ForgotPasswordModal = ({closeForgotPassword}) => {
    // Estado para alternar entre as telas
    const [isEmailSent, setIsEmailSent] = useState(false);

    // Função para alternar para a tela de redefinição de senha
    const handleSendLink = (e) => {
        e.preventDefault();
        setIsEmailSent(true);
    };

    // Função para atualizar a senha
    const handleChangePassword = (e) => {
        e.preventDefault();
        // Adicione a lógica para alterar a senha aqui
        closeForgotPassword(); // Fecha o modal após alterar a senha
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeForgotPassword()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeForgotPassword}>X</button>
                <h2>RECUPERAR SENHA</h2>

                {!isEmailSent ? (
                    // Primeira tela: Solicitar link de recuperação
                    <>
                        <p>Insira seu e-mail para enviarmos um link de recuperação de sua senha.</p>
                        <form onSubmit={handleSendLink}>
                            <input type="email" placeholder="Insira seu e-mail aqui." required/>
                            <button className="send-link-button" type="submit">ENVIAR LINK</button>
                        </form>
                    </>
                ) : (
                    // Segunda tela: Redefinição de senha
                    <form onSubmit={handleChangePassword}>
                        <label>
                            E-MAIL:
                            <input type="email" placeholder="Insira seu e-mail aqui." required/>
                        </label>
                        <label>
                            SENHA:
                            <input type="password" placeholder="Insira sua senha aqui." required/>
                        </label>
                        <label>
                            CONFIRMAR SENHA:
                            <input type="password" placeholder="Insira sua senha novamente aqui." required/>
                        </label>
                        <button className="send-link-button" type="submit">ALTERAR SENHA</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
