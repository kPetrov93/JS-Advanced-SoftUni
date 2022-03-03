class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        let isPresent = false;
        let hasEnoughMoney = false;

        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        for (const person of this.listOfParticipants) {
            if (person.name === name) {
                isPresent = true;
                return `The ${name} is already registered at the camp.`
            }
        }

        if (this.priceForTheCamp[condition] > Number(money)) {
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            hasEnoughMoney = true;
        }

        if (!isPresent && hasEnoughMoney) {
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {

        let isThere = false;
        let toBeRemoved;

        for (const el of this.listOfParticipants) {
            if (el.name === name) {
                isThere = true;
                toBeRemoved = el;
                break;
            }
        }

        if (!isThere) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            let removeIt = this.listOfParticipants.indexOf(toBeRemoved);
            this.listOfParticipants.splice(removeIt, 1);
            return `The ${name} removed successfully.`;
        }

    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame === 'WaterBalloonFights') {

            let player1 = 0;
            let player2 = 0;

            for (const people of this.listOfParticipants) {
                if (people.name === participant1) {
                    player1 = people;
                    break;
                }
            }

            for (const people of this.listOfParticipants) {

                if (people.name === participant2) {
                    player2 = people;
                }
            }

            if (player1 === 0 || player2 === 0) {
                throw new Error(`Invalid entered name/s.`);
            } else if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player1.power < player2.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame === 'Battleship') {

            let isHere = false;

            for (const elem of this.listOfParticipants) {
                if (elem.name === participant1) {
                    isHere = true;
                    elem.power += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`
                }
            }

            if (!isHere) {
                throw new Error(`Invalid entered name/s.`);
            }
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (const participants of this.listOfParticipants) {
            result.push(`${participants.name} - ${participants.condition} - ${participants.power} - ${participants.wins}`)
        }

        return result.join('\n');
    }
}