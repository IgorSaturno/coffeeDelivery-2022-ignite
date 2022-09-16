import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from "../../../../assets/Imagem.svg"
import { RegularText } from "../../../../components/typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
    const {colors} = useTheme();
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoWithIcon
                        iconBg={colors["brand-yellow-dark"]} 
                        icon={<ShoppingCart weight="fill" />}
                        text="Compra simples e segura"
                        />
                  
                        <InfoWithIcon
                        iconBg={colors["base-text"]} 
                        icon={<Package weight="fill" />}
                        text="Embalagem mantem o café intaquito"  
                        />
                   
                        <InfoWithIcon
                        iconBg={colors["brand-yellow"]} 
                        icon={<Timer weight="fill" />}
                        text="Entrega rápida e rastreada" 
                        />

                        <InfoWithIcon
                        iconBg={colors["brand-purple"]} 
                        icon={<Coffee weight="fill" />}
                        text="O café chega fresquinho até você" 
                        />
                    
                    </BenefitsContainer>
                </div>

                <img src={introImg} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}