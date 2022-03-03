class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        let article = { articleModel, articleName, quantity };
        let isFound = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        for (let el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += quantity;
                isFound = true;
            }
        }

        if (!isFound) {
            this.listOfArticles.push(article);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        let guest = { guestName, points: 0, purchaseArticle: 0 }

        for (const person of this.guests) {
            if (person.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        if (personality === 'Vip') {
            guest.points = 500;
        } else if (personality === 'Middle') {
            guest.points = 250;
        } else {
            guest.points = 50;
        }

        this.guests.push(guest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        let article;
        let guest;
        let isInTheArray = false;
        let personIsInTheArray = false;

        for (const el of this.listOfArticles) {
            if (el.articleName !== articleName || el.articleModel !== articleModel) {
                isInTheArray = false;
            } else {
                article = el;
                isInTheArray = true;
                break;
            }
        }

        if (!isInTheArray) {
            throw new Error(`This article is not found.`)
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        for (const person of this.guests) {
            if (person.guestName !== guestName) {
                personIsInTheArray = false
            } else {
                guest = person;
                personIsInTheArray = true;
                break;
            }
        }

        if (!personIsInTheArray) {
            return `This guest is not invited.`;
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        } else {
            guest.points -= Number(this.possibleArticles[articleModel]);
            guest.purchaseArticle++;
            article.quantity--;

            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }

    }

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria === 'article') {
            result.push("Articles information:");

            for (const text of this.listOfArticles) {
                result.push(`${text.articleModel} - ${text.articleName} - ${text.quantity}`)
            }
        } else if (criteria === 'guest') {
            result.push("Guests information:");

            for (const text of this.guests) {
                result.push(`${text.guestName} - ${text.purchaseArticle}`)
            }
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));