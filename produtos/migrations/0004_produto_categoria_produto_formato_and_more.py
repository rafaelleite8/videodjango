# Generated by Django 4.2.3 on 2023-07-18 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0003_alter_produto_afiliacao_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='categoria',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='produto',
            name='formato',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='produto',
            name='regra_de_comissionamento',
            field=models.CharField(default='', max_length=200),
        ),
    ]
