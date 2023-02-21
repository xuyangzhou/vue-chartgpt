import request from "@/utils/request";

import {
  GLOWINGTERMS,
  CHAYU,
  DUANZI,
  DUJITANG,
  LOVESENTENCE,
  FRIENDWORDS,
  POETRY,
  DOGLICKING,
  LOVEWORDS,
  WENAN,
  JOKE,
} from "./urlConfig";
export function getPoetry(): Promise<{
  author: string;
  category: string;
  content: string;
  origin: string;
}> {
  return request.get(POETRY);
}

export function getLoveWords(): Promise<{ code: number; content: string }> {
  return request({
    url: LOVEWORDS,
  });
}

export function getDuJiTang(): Promise<{ type: string; text: string }> {
  return request({
    url: DUJITANG,
  });
}

export function getGlowingTerms(): Promise<{ type: string; text: string }> {
  return request.get(GLOWINGTERMS);
}

export function getDogLicking(): Promise<{
  code: string;
  data: { id: number; text: string };
  msg: string;
}> {
  return request.get(DOGLICKING);
}

export function getWenAn(): Promise<{
  code: string;
  data: { id: number; text: string };
  msg: string;
}> {
  return request.get(WENAN);
}

export function getLoveSentence(): Promise<{
  code: string;
  data: { id: number; text: string };
  msg: string;
}> {
  return request.get(LOVESENTENCE);
}

export function getJoke(): Promise<{
  code: string;
  data: { id: number; text: string };
  msg: string;
}> {
  return request.get(JOKE);
}

export function getFriendWords(): Promise<{ type: string; text: string }> {
  return request.get(FRIENDWORDS);
}

// 跨域
export function getDuanZi(): Promise<{ type: string; text: string }> {
  return request.get(DUANZI);
}

export function getChaYu(): Promise<{ type: string; text: string }> {
  return request.get(CHAYU);
}
