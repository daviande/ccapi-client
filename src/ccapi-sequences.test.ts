import * as fs from "node:fs";
import { CCAPIClient, CCAPISequences } from "./index";

let client: CCAPIClient;
beforeAll(() => {
  client = new CCAPIClient("http://192.168.7.122:8080");
});

afterEach(() => jest.restoreAllMocks());

test("getLiveViewImage", async () => {
  const expectedFlipDetail = {
    incidentalInformation: {
      liveviewdata: {
        image: {
          sizex: 8192,
          sizey: 5464,
        },
      },
    },
    image: expect.any(ArrayBuffer),
  };
  const flipDetail = await CCAPISequences.getLiveViewImage(client);
  expect(flipDetail).toMatchObject(expectedFlipDetail);
  fs.writeFileSync("flipdetail.jpg", Buffer.from(flipDetail.image));
});

test("shootStillImage single", async () => {
  await client.setDrive("single");
  await client.setAEB("+0_1/3");
  const spy = jest.spyOn(client, "shutterButton");
  await CCAPISequences.shootStillImage(client);
  expect(spy).toHaveBeenCalledTimes(3);
}, 300000);

test("shootStillImage self_2sec", async () => {
  await client.setDrive("self_2sec");
  await client.setAEB("+0_1/3");
  const spy = jest.spyOn(client, "shutterButton");
  await CCAPISequences.shootStillImage(client);
  expect(spy).toHaveBeenCalledTimes(1);
}, 300000);
