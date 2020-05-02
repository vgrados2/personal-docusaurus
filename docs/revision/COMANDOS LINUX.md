### IPADDRESS
```centos7
#dhclient
#yum install net-tools
```

### MARIA DB
```centos7
# yum install mariadb-server
# systemctl enable mariadb
# systemctl restart mariadb
# mysql_secure_installation
# systemctl is-active mariadb.service
# mysql -u root -p
```
### FIREWALLD:
```centos7
# systemctl enable firewalld
# systemctl restart firewalld
# firewall-cmd --permanent --zone=public --add-port=3306/tcp
# firewall-cmd --reload
```
### MYSQL PERMISOS
```centos7
> CREATE USER 'admin'@'%' IDENTIFIED BY 'P@$$word';
> GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' With Grant Option;
> FLUSH PRIVILEGES;
> SHOW GRANTS FOR 'admin'@'%';
# systemctl restart mariadb
```

PARA ELIMINAR CONTRASEÑA 

VACIA
# systemctl stop mariadb
# vi /etc/my.cnf
  [mysqld]
  skip-grant-tables = 1
# systemctl restart mariadb

NUEVA
# mysql
> use mysql;
> update user SET PASSWORD=PASSWORD("password") WHERE USER='root';
> exit
# vi /etc/my.cnf
  [mysqld]
  #skip-grant-tables = 1
# systemctl restart mariadb

NGINX
# cat << EOF >> /etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/x86_64/
gpgcheck=0
enabled=1
EOF
# mkdir -p /var/www
# yum -y install nginx && systemctl enable nginx && systemctl restart nginx
# vi /etc/nginx/conf.d/default.conf

PHP
# rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
# yum -y update
# yum -y install php56w php56w-cli php56w-soap php56w-mysql php56w-common php56w-pdo php56w-odbc php56w-mcrypt php56w-mbstring php56w-gd php56w-xml php56w-fpm php56-mssql php56w-pear
# yum -y install php70w php70w-cli php70w-soap php70w-mysql php70w-common php70w-pdo php70w-odbc php70w-mcrypt php70w-mbstring php70w-gd php70w-xml php70w-fpm php70-mssql php70w-pear
# yum -y install php71w php71w-cli php71w-soap php71w-mysql php71w-common php71w-pdo php71w-odbc php71w-mcrypt php71w-mbstring php71w-gd php71w-xml php71w-fpm php70-mssql php71w-pear
# systemctl enable php-fpm && systemctl restart php-fpm

https://router.vuejs.org/en/essentials/history-mode.html





sudo wget https://github.com/bcicen/ctop/releases/download/v0.7.1/ctop-0.7.1-linux-amd64 -O /usr/local/bin/ctop
sudo chmod +x /usr/local/bin/ctop
ctop (enter)
con el ctop tambien puedes detener