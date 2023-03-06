import request from "./request";

export function getStuList() {
  return request({
    url: "/students",
    method: "GET",
  });
}

export function saveStuList(data) {
  return request({
    url: "/students",
    method: "POST",
    data,
  });
}

export function getStuByID(id) {
  return request({
    url: `/students/${id}`,
    method: "GET",
  });
}

export function delStuByID(id) {
  return request({
    url: `/students/${id}`,
    method: "DELETE",
  });
}

export function updateStuByID(data, id) {
  return request({
    url: `/students/${id}`,
    method: "PUT",
    data,
  });
}

export function getStudentsByName(name) {
  return request({
    url: `/students?name=${name}`,
    method: "GET",
  });
}
