import {CardVariant} from "@/features/UserProfileCard/ui/UserProfileCard";
import styles from '../ui/UserProfileCard.module.scss'

export const switchVariant = (variant: CardVariant) => {
    switch (variant) {
        case CardVariant.default: return ''
        case CardVariant.outline: return styles['profileCard--outline']
    }
}