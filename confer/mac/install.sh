cd "$(dirname "${BASH_SOURCE[0]}")"

sudo mkdir -p "/Library/Application Support/xiaoyu/"
sudo cp proxy_conf_helper "/Library/Application Support/xiaoyu/"
sudo chown root:admin "/Library/Application Support/xiaoyu/proxy_conf_helper"
sudo chmod a+rx "/Library/Application Support/xiaoyu/proxy_conf_helper"
sudo chmod +s "/Library/Application Support/xiaoyu/proxy_conf_helper"

echo done