export const fetchapidni = async (dni) => {
  const url = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlbmRlbGwxOGN1ZW50YUBnbWFpbC5jb20ifQ._WX1mBzFwWWRC1ijlROXBvKaP1Y24G_fyZ-SZdYLG4M`;

  const resp = await fetch(url);
  const data = await resp.json();

  if (data.success === false) {
    return false;
  }
  return data;
};
