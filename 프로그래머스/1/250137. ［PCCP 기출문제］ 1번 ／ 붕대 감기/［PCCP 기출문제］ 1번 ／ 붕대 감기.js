function solution(bandage, maxHp, attacks) {
    const [skillDuration, recoverPerSecond, extraRecover] = bandage
    const attackTime= attacks.map(n => n[0])
    const lastAttackTime = attackTime[attackTime.length - 1]
    let currentHp = maxHp
    let streakCount = 0
    
    for (let i = 1; i <= lastAttackTime; i ++) {
        if(!attackTime.includes(i)) {
            currentHp += recoverPerSecond
            streakCount++
        }
        if(skillDuration === streakCount) {
            currentHp += extraRecover
            streakCount = 0
        }
        if(currentHp > maxHp) currentHp = maxHp
        
        if(attackTime.includes(i)) {
            streakCount = 0
            const [, attackDamage] = attacks.find(attack => attack[0] === i)
            currentHp <= attackDamage ? currentHp = -1 : currentHp -= attackDamage
        }
        
        if(currentHp === -1) break
    }
    
    return currentHp
}