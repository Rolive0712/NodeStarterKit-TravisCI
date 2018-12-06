import {expect} from 'chai'; // for assertion. jasmine not used in starter kit
import jsdom from 'jsdom';
import fs from 'fs'; // node filesystem from core module

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// JSDOM test
describe('index.html', () => {
  it('should have h1 that says Users', (done) => {

    // get the file in memory
    const index = fs.readFileSync('./src/index.html', "utf-8");

    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done(); // extremely important. without it tests will not work.
      window.close();
    });
  })
})
