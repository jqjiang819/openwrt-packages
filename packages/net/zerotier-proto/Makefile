# Copyright 2023 Hugh Jiang
# This is free software, licensed under the GNU General Public License v3.

include $(TOPDIR)/rules.mk

PKG_NAME:=zerotier-proto
PKG_LICENSE:=GPL-3.0-or-later
PKG_MAINTAINER:=Hugh Jiang
PKG_VERSION:=1.0.0
PKG_RELEASE:=0

include $(INCLUDE_DIR)/package.mk

define Package/zerotier-proto
  SECTION:=net
  CATEGORY:=Network
  TITLE:=zerotier-proto
  URL:=https://www.zerotier.com
  DEPENDS:=+zerotier
  PKGARCH:=all
  SUBMENU:=VPN
endef

define Package/zerotier-proto/description
	ZeroTier creates a global provider-independent virtual private cloud network.
endef

define Build/Compile
endef

define Package/zerotier-proto/install
	$(INSTALL_DIR) $(1)/lib/netifd/proto
	$(INSTALL_BIN) ./proto/zerotier.proto $(1)/lib/netifd/proto/zerotier.sh
	$(SED) "s|^\(readonly PKG_VERSION\).*|\1='$(PKG_VERSION)-$(PKG_RELEASE)'|" $(1)/lib/netifd/proto/zerotier.sh
endef

$(eval $(call BuildPackage,zerotier-proto))
