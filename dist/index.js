"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesarCipher = void 0;
/**
 * If the index is negative, add the length of the array to the index, if the index is greater than the
 * length of the array, return the index modulo the length of the array, otherwise return the index.
 * @param {T[]} collection - The array you want to loop through
 * @param {number} index - The index of the item you want to get.
 * @returns The value at the index of the array.
 */
const loopedArray = (collection, index) => {
    index = Math.floor(index);
    if (index < 0)
        return collection[collection.length + index];
    if (collection.length > index)
        return collection[index];
    return collection[index % collection.length];
};
/**
 * It takes a word and a shift value, and returns the word with each letter shifted by the shift value.
 * @param {string} word - string - The word to be encrypted.
 * @param {number} shift - The number of characters to shift the word by.
 * @returns The result of the function.
 */
const caesarCipher = (word, shift) => {
    shift = Math.floor(shift);
    word = word.toUpperCase();
    const characters = new Array(26)
        .fill(65)
        .map((value, index) => String.fromCharCode(value + index));
    const result = [];
    for (const character of word) {
        const index = characters.indexOf(character);
        if (index < 0) {
            result.push(character);
            continue;
        }
        result.push(loopedArray(characters, index + shift));
    }
    return result.join('');
};
exports.caesarCipher = caesarCipher;
