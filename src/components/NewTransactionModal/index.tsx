import Modal from 'react-modal'
import { Container } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h2>Cadastrar</h2>

          <Container>
            <h2>Cadastrar Transações</h2>

            <input 
                placeholder="Título" 
            />

            <input 
                type="number"
                placeholder="Título" 
            />
             <input 
                placeholder="Categoria" 
            />

            <button type="submit">
                Cadastrar
            </button>
          </Container>
        </Modal>
    )
}