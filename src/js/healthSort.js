export default function helthSort(obj) {
    return obj.sort((a,b) => b.health - a.health);
}