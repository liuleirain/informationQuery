from django.db import models
from django.contrib.auth.models import User


class Computer(models.Model):
    serial_number = models.CharField(max_length=50, verbose_name='序列号')
    hostname = models.CharField(max_length=50, verbose_name='主机名')
    model = models.CharField(max_length=50, verbose_name='型号')
    user = models.ForeignKey(User, blank=True, null=True,
                             on_delete=models.DO_NOTHING)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.serial_number

    class Meta:
        verbose_name = verbose_name_plural = '电脑管理'
