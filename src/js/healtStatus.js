export default function helthStatus(obj) {
    if (obj.health > 50) {
        return 'healthy'
    } if (obj.health >= 15) {
        return 'wounded' 
    } return 'critical'
} 

// const hero = {name: 'Маг', health: 14}
// console.log(helthStatus(hero))