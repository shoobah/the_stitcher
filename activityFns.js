export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function anders(location) {
  return true;
}

export function navigation(location) {
  return true;
}

export function meetings(location) {
  return prefix(location, "Meetings");
}

export function create(location) {
  return prefix(location, "CreateMeeting");
}
