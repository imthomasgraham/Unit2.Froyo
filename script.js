document.addEventListener('DOMContentLoaded', (event) => {
    let froyoOrders = prompt("Enter the froyo flavors you've ordered, separated by a comma (e.g., vanilla,chocolate,strawberry):");
    let flavorsArray = froyoOrders.split(',');
    let flavorCounts = countFlavors(flavorsArray);

    console.log(`You have ordered these flavors: ${flavorsArray.join(', ')}.`);
    console.log(`Flavor counts: ${JSON.stringify(flavorCounts)}`);
});

function countFlavors(flavors) {
    let counts = {};
    flavors.forEach(flavor => {
        flavor = flavor.trim().toLowerCase(); // Normalize the input
        counts[flavor] = (counts[flavor] || 0) + 1;
    });
    return counts;
}
