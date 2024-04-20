import { CCAPIClient } from "./index";

test("getAV", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedAV = {
    value: expect.any(String),
    ability: expect.arrayContaining(["f8.0"]),
  };
  const av = await client.getAV();
  expect(av).toMatchObject(expectedAV);
});

test("setAV", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedAV = {
    value: "f11",
  };
  const av = await client.setAV("f11");
  expect(av).toMatchObject(expectedAV);
});

test("getISO", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedISO = {
    value: expect.any(String),
    ability: expect.arrayContaining(["auto", "100"]),
  };
  const iso = await client.getISO();
  expect(iso).toMatchObject(expectedISO);
});

test("setISO", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedISO = {
    value: "100",
  };
  const iso = await client.setISO("100");
  expect(iso).toMatchObject(expectedISO);
});

test("getExposure", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedExposure = {
    value: expect.any(String),
    ability: expect.arrayContaining(["-1_2/3"]),
  };
  const exposure = await client.getExposure();
  expect(exposure).toMatchObject(expectedExposure);
});

test("setExposure", async () => {
  const client = new CCAPIClient("http://192.168.7.122:8080");

  const expectedExposure = {
    value: "-1_2/3",
  };
  const iso = await client.setExposure("-1_2/3");
  expect(iso).toMatchObject(expectedExposure);
});
