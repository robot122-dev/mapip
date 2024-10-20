export function addOffset(map) {
    console.log("hehe");
    

    const offsetY = map.getSize().y * 0.10;
    map.panBy([0, offsetY], {animate: false});
}