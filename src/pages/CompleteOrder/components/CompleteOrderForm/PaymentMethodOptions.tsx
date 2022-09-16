import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymnentMethodOptionsContainer } from "./styles";
import { useFormContext } from 'react-hook-form'
import { RegularText } from "../../../../components/typography";

export const paymentMethods = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />
    }
}

export function PaymentMethodOptions() {
    const { register, formState: {errors} } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymnentMethodOptionsContainer>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) =>(
                <PaymentMethodInput
                    key={label}
                    id={key} 
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymnentMethodOptionsContainer>
    )
}