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
  if (
    typeof singara !== "number" ||
    typeof samucha !== "number" ||
    typeof jilapi !== "number"
  ) {
    return "Please provide a valid intezer number!";
  } else if (singara < 0 || samucha < 0 || jilapi < 0) {
    return "All parameters should be positive number!";
  } else {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    const totalPrice =
      singaraPrice * singara + samucha * samuchaPrice + jilapi * jilapiPrice;
    return totalPrice;
  }
}
console.log(PandaCost(2, 1, -1));

/*ফাংশন নেম দিতে হবে PicnicBugdet . প্যারামিটার হিসাবে নিবে কয়জন পিকনিক এ যাবে সেই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে । 
যদি ১০০ এর বেশি কিন্তু ২০০এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা 
করে দিতে হবে। আর ১০০ এর বেশি(অর্থ্যাত ১০১ নম্বর থেকে) যতজন আছে  তাদের প্রত্যেককে ওই জন্য ৪০০০
টাকা করে দিতে হবে। 
আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর 
১০০ বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে । এর ২০০ এর বেশি (অর্থ্যাত ২০১ 
    নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে । */

function PicnicBugdet(participants) {
  if (typeof participants !== "number" || typeof participants < 0) {
    return "Participants sho";
  } else {
    let first100Cost = 0;
    let second101To200Cost = 0;
    let remainingCost = 0;
    let totalCost = 0;

    if (participants <= 100) {
      first100Cost = participants * 5000;
      return first100Cost;
    } else if (participants <= 200) {
      first100Cost = 5000 * 100;
      second101To200Cost = (participants - 100) * 4000;
      total = first100Cost + second101To200Cost;
      return total;
    } else {
      first100Cost = 5000 * 100;
      second101To200Cost = 4000 * 100;
      remainingCost = (participants - 200) * 3000;
      total = first100Cost + second101To200Cost + remainingCost;
      return total;
    }
  }
}
console.log(PicnicBugdet(201));
