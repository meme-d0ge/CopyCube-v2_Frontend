import {CardVariant} from "@/widgets/Header/components/HeaderProfileCard/ui/HeaderProfileCard";
import styles from '../ui/HeaderProfileCard.module.scss'

export const switchVariant = (variant: CardVariant) => {
    switch (variant) {
        case CardVariant.default: return ''
        case CardVariant.outline: return styles['profileCard--outline']
    }
}