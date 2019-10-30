// import Nightmare from "nightmare";
// import { sms } from "../utils/nexmo-sms-service";

describe("Sample test suite", () => {
    it("This should pass", () => {
        expect(true).toEqual(true);
    });
});

// describe("test duckduckgo search results", () => {
//     it("should find the nightmare github link first", async done => {
//         const nightmare = Nightmare({
//             waitTimeout: 100000, // in ms
//             show: true
//         });
//         nightmare
//             .goto("https://duckduckgo.com")
//             .type("#search_form_input_homepage", "github nightmare")
//             .click("#search_button_homepage")
//             .wait("#links .result__a")
//             .evaluate(() => document.querySelector("#links .result__a").href)
//             .end()
//             .then(link => {
//                 expect(link).toEqual("https://github.com/segmentio/nightmare");
//                 done();
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     });
// });
