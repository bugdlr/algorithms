// var merge = function (nums1, m, nums2, n) {
//     for (let i = 0; i < nums2.length; i++) {
//         for (let j = 0; j < nums1.length; j++) {
//             if (nums2[i] <= nums1[j]) {
//                 nums1.splice(nums1[j], 0, nums2[i]);
//                 break;
//             } else if (nums1[j] == 0) {
//                 nums1.pop();
//                 nums1.push(nums2[i]);
//             }
//             console.log(nums1);
//         }
//     }

// };

var merge = function (nums1, m, nums2, n) {
    let trimmed = nums1.slice(0, m);
    let merged = trimmed.concat(nums2);
    return merged.sort((a, b) => a - b);
};


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);