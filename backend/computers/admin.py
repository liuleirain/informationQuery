from django.contrib import admin
from .models import Computer
from import_export.admin import ImportExportModelAdmin


@admin.register(Computer)
class ComputerAdmin(ImportExportModelAdmin):
    list_display = ('serial_number', 'hostname', 'model')


admin.site.site_header = '管理后台'
