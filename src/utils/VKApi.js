import bridge from "@vkontakte/vk-bridge";

export function getUsersAvatars({ ids, options }) {
  return bridge
    .send("VKWebAppGetUserInfo", {
      user_ids: ids,
    })
    .then((res) => {
      return res.result.map((profile) => profile.photo_200);
    })
    .catch((err) => console.log(err));
}
