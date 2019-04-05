export default class AjaxHelper {
    Get = <T>(url: string, callback: (data: T) => void): void => {
        fetch(url, { method: 'get' })
            .then(s => s.json())
            .then(j => callback(j as T))
            .catch(e => { alert(e); });
    };
}