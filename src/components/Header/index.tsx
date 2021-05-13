import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface Headerprops {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: Headerprops) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="App Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
