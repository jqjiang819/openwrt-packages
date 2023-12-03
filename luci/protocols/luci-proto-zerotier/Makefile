# Copyright 2023 Hugh Jiang
# This is free software, licensed under the GNU General Public License v3.

include $(TOPDIR)/rules.mk

PKG_LICENSE:=GPL-3.0-or-later
PKG_MAINTAINER:=Hugh Jiang
PKG_VERSION:=1.0.0
PKG_RELEASE:=0

LUCI_TITLE:=Support for Zerotier
LUCI_DESCRIPTION:=Provides Web UI for Zerotier protocol/interface.
LUCI_DEPENDS:=+zerotier +zerotier-proto
LUCI_PKGARCH:=all

include ../../luci.mk

# call BuildPackage - OpenWrt buildroot signature
