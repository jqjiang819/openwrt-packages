'use strict';
'require ui';
'require uci';
'require rpc';
'require form';
'require network';

network.registerPatternVirtual(/^zt-.+$/);

return network.registerProtocol('zerotier', {
	getI18n: function () {
		return _('Zerotier');
	},

	getIfname: function () {
		return this._ubus('l3_device') || 'zt-%s'.format(this.sid);
	},

	getOpkgPackage: function () {
		return 'zerotier';
	},

	isFloating: function () {
		return true;
	},

	isVirtual: function () {
		return true;
	},

	getDevices: function () {
		return null;
	},

	containsDevice: function (ifname) {
		return (network.getIfnameOf(ifname) == this.getIfname());
	},

	renderFormOptions: function (s) {
		var o;

		o = s.taboption('general', form.Value, 'network_id', _('Network ID'), _('Required. Network to join.'));
		o.optional = false;
		o.rmempty = false;
        o = s.taboption('general', form.Value, 'moon_id', _('Moon ID'), _('Optional. Moon to orbit'));
		o.optional = true;
		o.rmempty = true;
		o = s.taboption('general', form.Value, 'secret', _('Secret'), _('Your network identifier.'));
		o.optional = true;
	},

	deleteConfiguration: function () {
		uci.sections('network', 'zt-%s'.format(this.sid), function (s) {
			uci.remove('network', s['.name']);
		});
	}
});
