# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.provision "chef_solo" do |chef|
        chef.cookbooks_path = "../cookbooks"
        chef.add_recipe "tv_web_server"
    end
    config.vm.network "public_network", ip: "192.168.1.102"
end
