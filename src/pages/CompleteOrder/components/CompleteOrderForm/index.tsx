import { TitleText } from "../../../../components/typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
export function CompleteOrderForm() {
const theme = useTheme();

    return(
        <CompleteOrderFormContainer className="container">
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle 
                    title="Endereço de entrega"
                    subtitle="Informe o endereço de onde deseja receber seu pedido"
                    icon={<MapPinLine color={theme.colors["brand-yellow-dark"]} size={22} />}
                />
                <AddressForm />
            </FormSectionContainer>
            <FormSectionContainer>
                <SectionTitle 
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={theme.colors["brand-purple"]} size={22} />}
                />
               <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}