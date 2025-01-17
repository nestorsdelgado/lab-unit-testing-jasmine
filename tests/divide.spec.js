// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect(add).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the divide of the two numbers", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(8, 4)).toEqual(2);
            expect(divide(100, 50)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide(!Number,Number)).toEqual(undefined);
            expect(divide(!Number,!Number)).toEqual(undefined);
            expect(divide(!Number,!Number)).toEqual(undefined);
    
        });

    })    
})

