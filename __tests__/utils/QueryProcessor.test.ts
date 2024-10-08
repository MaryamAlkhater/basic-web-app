import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My andrew id is: malkhate");
    }
    );

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Maryam");
    });

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 20, 72, 76";
        const response: string = QueryProcessor(query);
        expect(response).toBe("76");
    });

    test('should add numbers', () => {
        const query = "What is 10 plus 20";
        const response: string = QueryProcessor(query);
        expect(response).toBe("30");
    }
    );

    test('should multiply numbers', () => {
        const query = "What is 10 multiplied by 20";
        const response: string = QueryProcessor(query);
        expect(response).toBe("200");
    });

    test('should return square and cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 16, 27, 64, 81, 100, 125";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should return prime number', () => {
        const query = "Which of the following numbers are prime: 1, 2, 3, 4, 5";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2, 3, 5");
    });

    test('should subtract numbers', () => {
        const query = "What is 20 minus 10";
        const response: string = QueryProcessor(query);
        expect(response).toBe("10");
    }
    );

    test('should add three numbers', () => {
        const query = "What is 10 plus 20 plus 30";
        const response: string = QueryProcessor(query);
        expect(response).toBe("60");
    }
    );

    test('should compute power', () => {
        const query = "What is 2 to the power of 3";
        const response: string = QueryProcessor(query);
        expect(response).toBe("8");
    } );

    test('should return plus multiply', () => {
        const query = "What is 10 plus 20 multiplied by 30";
        const response: string = QueryProcessor(query);
        expect(response).toBe("610");
    });




});