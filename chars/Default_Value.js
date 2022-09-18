export const DEFAULT_HP = 100
export const DEFAULT_MP = 200
export const DEFAULT_DEF = 50
export const DEFAULT_ATK = 20

export const attack = (objectOne,objectTwo) => {

    if(objectOne?.HP && objectTwo?.HP){
        let pOneDame = (objectOne.ATK - objectTwo.DEF) <= 0 ? 1 : (objectOne.ATK - objectTwo.DEF)
        let pTwoDame = (objectTwo.ATK - objectOne.DEF) <= 0 ? 1 : (objectTwo.ATK - objectOne.DEF)

        objectOne.HP = (objectOne.HP - pTwoDame) <= 0 ? 0 : objectOne.HP - pTwoDame
        objectTwo.HP = (objectTwo.HP - pOneDame) <= 0 ? 0 : objectTwo.HP - pOneDame

    }
}
