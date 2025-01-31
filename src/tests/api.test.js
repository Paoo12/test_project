const { fetchData } = require("../functions/api"); 



describe('fetchData', () => {
    it('Should give us data in json format', async () => {
        const fetchData = jest.fn();
        fetchData.mockResolvedValue({id: 1, product: 'shoes', price: 100});
        const data = await fetchData();
        expect(data).toEqual({id: 1, product: 'shoes', price: 100});
        expect(fetchData).toHaveBeenCalledTimes(1);
    });

    
});