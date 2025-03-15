// //find Largest number
// function findLargest(values) {
//     if (!Array.isArray(values)) {
//         return "Provide an array."
//     } else {
//         let max = values[0];
//         for (let i = 1; i < values.length; i++) {
//             if (typeof values[i] !== "number") {
//                 return "All values should be Number"
//             } else {
//                 if (values[i] > max) {
//                     max = values[i];
//                 }
//             }

//         }
//         return max;
//     }
// const numbers = [55, 23, 21, "10", 45, 68, false, 200, 651, 892, 0]
// console.log(findLargest(numbers));
// }
// প্রবলেম১ঃ [ফাংশন নেম দিতে হবে AnaToVori]: একটা ফাংশন এ প্যারামিটার
//  হিসেবে নিবে আনা (Ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় 
// সেই সংখ্যা রিটার্ন করবে । শুধু সংখ্যাটি রিটার্ন করবে । 

// function AnaToVori(Ana) {
//     if (typeof Ana !== "number" || Ana < 0) {
//         return "Please provide a valid integer number"
//     } else {
//         const Vori = Ana * 0.0625
//         return Vori;
//     }


// }
// console.log(AnaToVori(16))
// প্রবলেম সল্ভিং২ঃ[ফাংশন নেম দিতে হবে PandaCost]: তিনটা প্যারামিটার লাগবে ।
//  ১ টি সিঙ্গারা এর দাম - ৭ টাকা 
//  ১ টি সমুচা এর দাম -  ১০ টাকা 
//  ১ টি জিলাপি এর দাম - ১৫ টাকা 
//  এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা , সমুচা আর জিলাপি এর অর্ডার দেয় তাহলে 
//  টোটাল কত টাকা খরচ হবে এবং সেই সংখ্যা রিটার্ন করতে হবে । 

function PandaCost(singara, samucha, jilapi) {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    const totalPrice = singaraPrice * singara + samucha * samuchaPrice + jilapi * jilapiPrice;
    return totalPrice
}
console.log(PandaCost(2,1,1))