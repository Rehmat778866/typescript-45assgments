"use strict";
let Guest_list = ['Quaid_e_Azam', 'Kamran khan tessori', 'Rehmat'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
let absent_Guest = 'Quaid_e_Azam';
let new_Guest = 'Daniyal Nagori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
