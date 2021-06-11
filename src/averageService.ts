export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
}

function getTotalScore(scores) {
    return scores.reduce((score, count) => score + count);
};

export const a: number = 5;